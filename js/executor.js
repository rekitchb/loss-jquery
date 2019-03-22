// make horizontal divider from #8 to bottom
var colHor = 8;
colorize(colHor, "black", width, "Vertical");

// make vertical divider from #106 to right
var rowVer = 106;
colorize(rowVer, "black", width, "Horizontal");

// section one from #19 to 5 block below
var secOne1 = 19;
colorize(secOne1, "red", 5, "Vertical");

// section two from #26 to 5 block below
// and #43 to 4 block below
var secTwo1 = 26,
  secTwo2 = 43;
colorize(secTwo1, "red", 5, "Vertical");
colorize(secTwo2, "red", 4, "Vertical");

// section three from #138 to 5 block below
// and #140 to 5 block below
var secThree1 = 138,
  secThree2 = 140;
colorize(secThree1, "red", 5, "Vertical");
colorize(secThree2, "red", 5, "Vertical");

// section four from #145 to 5 block below
// and #206 to 4 block to right
var secFour1 = 145,
  secFour2 = 206;
colorize(secFour1, "red", 5, "Vertical");
colorize(secFour2, "red", 4, "Horizontal");