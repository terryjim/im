//收到消息时间如果是今天则不显示日期
export const convertDate = (date,format='yyyy-MM-dd hh:mm:ss') => {
  if (date == null || date == '')
    return ''
  if (new Date(date).Format('yyyy-MM-dd') == new Date().Format('yyyy-MM-dd'))
    return new Date(date).Format('hh:mm:ss')
  else
    return new Date(date).Format(format)
}