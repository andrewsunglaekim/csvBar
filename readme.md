# CsvBar

This application parses simple CSV's and creates an editable table with bar chart visualization. It's built in angular.

## Installation

> Because this makes a request to a `.csv` file you can not open the `index.html` directly in the browser. Instead you'll need to spin up a simple server for it. I recommend nodeJS http-server

To install http-server globally:

```bash
$ npm install http-server -g
```

Then simply clone and run `hs` in the repository:

```bash
$ git clone git@github.com:andrewsunglaekim/csvBar.git
$ cd csvBar
$ hs
```

Then open browser to `http://localhost:8080`.


## Goals
- Ideally, it'd be nice to incorporate some file I/O to import export CSV's and provide interface for that.
  - customizations to tag column/row names and incorporate to csv export/import
- Animations for the bar charts on change
