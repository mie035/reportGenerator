

function generateReport() {
  const templateDocID = "1J9er5e5bYJXyXK_3pGKY8Mh-OS2ReoMzKGGI0UdXY6Q";
  var d= new Date();
  var filename = Utilities.formatDate(d,'JST','MM月dd日');
  var copyTemp = DriveApp.getFileById(templateDocID);
  copyTemp = copyTemp.makeCopy(filename+'_blank');
  Logger.log(filename+'is published');
  
  UrlFetchApp.fetch('https://maker.ifttt.com/trigger/report_now/with/key/iruZDFXzCKGIC7wSilKGl/?value1='+filename);
}
