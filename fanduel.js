$(document).ready(function() {
  $('.mod-content table.mod-data thead tr').not('.team-color-strip').append('<th>FD</th>');
  $('.mod-content table.mod-data tbody tr').each(function(index){
    console.log($(this).find('td:nth-last-child(1)').text());
    var pts = Number($(this).find('td:nth-last-child(1)').text());
    var ast = Number($(this).find('td:nth-last-child(6)').text());
    var stl = Number($(this).find('td:nth-last-child(5)').text());
    var blk = Number($(this).find('td:nth-last-child(4)').text());
    var tov = Number($(this).find('td:nth-last-child(3)').text());
    var reb = Number($(this).find('td:nth-last-child(7)').text());
    var fd = (pts + (1.5*ast) + (2*stl) + (2*blk) - tov + (1.2*reb)).toFixed(2);
    $(this).append("<td>" + fd + "</td>");
  });
});

