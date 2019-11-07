import React from 'react'

class BR_Bookcase extends React.Component {
    render() {
        return (
            <>
                <div className="HotBookBoxAll_Bookcase">
                    <h5 className="h5_Bookcase">熱門書評</h5>
                        <div className="HotBookBox_Bookcase">
                            <img className="brHotBookImg_Bookcase" src={require('../reviewer_page/images/03書_React全方位基礎入門實戰.png')} />
                            <img className="brHotBookImg_Bookcase" src={require('../reviewer_page/images/03書_React全方位基礎入門實戰.png')} />
                            <img className="brHotBookImg_Bookcase" src={require('../reviewer_page/images/03書_React全方位基礎入門實戰.png')} />
                            <img className="brHotBookImg_Bookcase" src={require('../reviewer_page/images/03書_React全方位基礎入門實戰.png')} />
                        </div>
                    </div>
            {/* 沿用框架 */}
<section className="ReviewerListAllBox_Bookcase reviewerList">
    <div className="d-flex">
          <div className="brAvatarAllBox_Bookcase borderLine">
            {/* 書籍圖片 */}
              <img className="brBookInfoImg_Bookcase" src={require('../reviewer_page/images/01書_說話之道.png')}/>
          </div>

          <div className="brInfoBox_Bookcase borderLine"><h5>書籍簡介</h5>
                <div className="brInfoText_Bookcase borderLine">
                    {this.props.bookName}<div className="bookInfo">書名：說話之道</div>
                    {this.props.bookFor}<div className="bookInfo">作者：蔡康永</div>
                    <br/>
                        書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 
                        書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 
                        書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 
                        書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 
                        書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 
                        書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 
                        書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 
                        書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 
                        書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 
                        書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 
                        書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 
                        書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 書評介紹 > 
                </div>
                <div className="brIconBox_Bookcase borderLineTop">
                    <img className="brIconShare_Bookcase" src={require('../reviewer_page/images/icon_youtube.png')}/>
                    <img className="brIconShare_Bookcase" src={require('../reviewer_page/images/icon_facebook.png')}/>
                    <img className="brIconShare_Bookcase" src={require('../reviewer_page/images/icon_twitter.png')}/>
                    <img style={{width:'20px'}} className="brIconShare_Bookcase" src={require('../reviewer_page/images/icon_shaer.png')}/>
              </div>
          </div>
    </div>
    <div className="brStartBox_Bookcase borderLine">
            {/* 星等元件 */}
              {/* <div className="borderLineTop">
              </div> */}
          </div>
</section>
       </>
        )
    }
}

export default BR_Bookcase
