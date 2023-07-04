const Licom = () =>{
    const sellerdb = [
        {
            imgsrc : "",
            brandnm : "뉴트리코어",
            proprice : 462000,
            saleprice : 33000,
            pronm : "유기농 비오틴 플러스맥스 여성용 1박스"
        },
        {
            imgsrc : "",
            brandnm : "파이토웨이",
            proprice : 474000,
            saleprice : 79000,
            pronm : "판토모나 비오틴 플러스맥스 여성용 1박스"
        },
        {
            imgsrc : "",
            brandnm : "파이토웨이",
            proprice : 79000,
            saleprice : 79000,
            pronm : "할인안함"
        },
        {
            imgsrc : "",
            brandnm : "파이토웨이",
            proprice : 474000,
            saleprice : 79000,
            pronm : "판토모나 비오틴 플러스맥스 여성용 1박스"
        },
    ]
    return(
        <ul className="d-flex flex-wrap">
        {            
            sellerdb.map( (v, i) => {
                return(
                <li className="d-flex position-relative col-6">
                    {
                        v.proprice != v.saleprice &&
                        <div className="salered position-absolute">{
                             100 - ( ( v.saleprice / v.proprice ) * 100 ) + '%'
                            }</div>
                    }
                    <img src="퍼블릭에 이미지넣고 경로넣기"></img>
                    <div>
                        <p className="brandnm">브랜명</p>
                        <h3 className="pronm">상품명</h3>
                        <div className="d-flex">
                            <strong className="proprice">{v.saleprice}</strong>
                            {
                               v.proprice != v.saleprice &&  <span>{v.proprice}</span>
                            }
                        </div>
                    </div>
                </li>
                )
            })
        }
        </ul>
    )
}

export default Licom;