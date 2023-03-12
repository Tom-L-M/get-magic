# Get-Magic-JS

A tool for retrieving and detecting file signatures. 
Can return matches in the whole file, or in the beggining.

Run `npm install -g get-magic`.


Tool help page:

    [get-magic-js]

    Description:
        A tool for extracting file signatures (magic numbers).

    Usage:
        get-magic <file> [--help] [--all] [--describe]

    Info:
        > Setting --all, forces the program to output all magic numbers found,
          including the suspicious ones in the middle of bytecode.
        > Setting --describe makes all the extension descriptions to be logged.
          This is useful for different programs with the same extension.