// This is needed to make eslint happy.
// typescript is made happy by the plugin "typescript-plugin-css-modules" (see tsconfig.json and package.json)
// Actual usage of the sass files is taken care of by parcel.
declare module '*.module.sass' {
    const classes: { [key: string]: string };
    export default classes;
}
