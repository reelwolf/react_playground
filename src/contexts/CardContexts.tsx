import React from 'react';
import StringCarddata from '../types/StringCarddata';

export const SingleStringcardContext = React.createContext(
    [
        new StringCarddata("Hello World")
    ]);

export const MultiStringcardContext = React.createContext(
    [
        new StringCarddata("Hello World!"), 
        new StringCarddata("Universe", "Welcome"), 
        new StringCarddata()
    ]);