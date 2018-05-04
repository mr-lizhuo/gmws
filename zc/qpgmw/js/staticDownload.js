/**
 * 静态推广下载统计下载量
 * @param  type  类型
 */
function staticTotalDownLoad(type,siteId,downUrl)
{
	$.ajax({
		type : "post",
		url : ctx+"/static/recordPageStatistics.do?timestamp="
				+ new Date().getTime(),
		cache : false,
		data:{"type":type,"siteId":siteId},	
		dataType : "json",
		success : function(data) {
			if(downUrl!=null&&downUrl!='')
			{
				window.location.href = downUrl;
			}		
		}
	});
}