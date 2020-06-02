import mockAjax from './mockAjax'

export const reqHome = () => mockAjax.get('/home')
export const reqCateModule= () => mockAjax.get('/catemodule')
export const reqCateNavDatas= () => mockAjax.get('/catenavnatas')
export const reqNavCateLists= () => mockAjax.get('/navcatelists')