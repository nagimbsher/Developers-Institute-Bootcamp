
function getDateFmString(){
Date getDateFmString(String dateString)
{

 SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
 Date convertedCurrentDate = sdf.parse(dateString);
 return convertedCurrentDate ;
}
}