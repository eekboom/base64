// This `<reference ...>` directive is necessary to include the adapter's
// extensions to types in the "preact" and "enzyme" packages.
// Also the position at the beginning of the file is crucial!

/// <reference types="enzyme-adapter-preact-pure"/>

import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';

configure({ adapter: new Adapter });
