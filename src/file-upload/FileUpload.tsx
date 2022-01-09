import {useState} from "preact/compat";
import {createRef, JSX} from "preact";
import {clz, formatAsFileSize, isFileDragEvent} from "../utilz";
import classes from './FileUpload.module.sass';

interface FileUploadProps {
    maxFileSize: number;
    setFile: (file: File) => void;
    className?: string;
}

export const FileUpload = ({maxFileSize, setFile, className}: FileUploadProps): JSX.Element => {
    const fileInputRef = createRef<HTMLInputElement>();
    // In case of invalid file (size too large) the file is not propagated to the props, but still kept locally, so that the file name can
    // be displayed.
    const [localFile, setLocalFile] = useState<File>(null);

    const [isDragOver, setDragOver] = useState(false);

    function handleFilesReceived(files: FileList): void {
        const file = files[0];
        setLocalFile(file);
        if (file.size <= maxFileSize) {
            setFile(file);
        }
    }

    function handleFileChanged(): void {
        handleFilesReceived(fileInputRef.current.files);
    }

    function showDragging(e: DragEvent): void {
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = isFileDragEvent(e) ? "copy" : "none";
        setDragOver(true);
    }

    function hideDragging(e: DragEvent): void {
        e.stopPropagation();
        e.preventDefault();
        setDragOver(false);
    }

    function handleDrop(e: DragEvent): void {
        hideDragging(e);

        handleFilesReceived(e.dataTransfer.files);
    }

    function infoFile(): File {
        return isDragOver ? undefined : localFile;
    }

    return (
        <div id="file-input-label"
             htmlFor="file-input"
             className={clz(classes.fileUpload, className, isDragOver && classes.dragOver)}
             onDragEnter={showDragging}
             onDragOver={showDragging}
             onDragLeave={hideDragging}
             onDrop={handleDrop}>

            <label htmlFor="file-input"
                   className={"button " + classes.fileSelectButton}
            >
                Select File
            </label>

            {/* This one's hidden because it's ugly. It is still usable via the associated (and styled) label. */}
            <input id="file-input"
                   className="visuallyHidden"
                   type="file"
                   ref={fileInputRef}
                   onChange={handleFileChanged}/>

            {!infoFile() && <span className={classes.fileDropHint}>or drop file here</span>}
            {infoFile() &&
                <span className={clz(classes.fileInfo, (localFile.size > maxFileSize) && classes.invalidFile)}>
                    <span className={classes.fileName}>
                        {infoFile().name}
                    </span>
                    <span className={classes.fileSize}>
                        {formatAsFileSize(infoFile().size, 1)}
                    </span>
                    {(localFile.size > maxFileSize) &&
                    <span className={classes.fileTooLarge}> File is too large (limit is {formatAsFileSize(maxFileSize)})</span>}
                </span>
            }
        </div>
    );

}