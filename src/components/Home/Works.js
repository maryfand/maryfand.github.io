import React from 'react'
import {Card,CardMedia,CardTitle} from 'material-ui/Card';

class Works extends React.Component {
  render () {
    let styles={
      title:{
        padding:'5px'
      }
    }
    return(
      <div className='work-container'>
        <a href="https://maryfand.github.io/100" className="work-list">
          <Card className="work-card">
            <CardMedia overlay={<CardTitle title="百日百页面" subtitle="初学前端每日笔记" style={styles.title}/>} >
              <img src="http://obbjyirz0.bkt.clouddn.com/668573_210906041541_2~001.jpg" />
            </CardMedia>
          </Card>
        </a>
        <a href="https://maryfand.github.io/blog" className="work-list">
            <Card className="work-card">
              <CardMedia overlay={<CardTitle title="文档手册" subtitle="我的个人博客" style={styles.title}/>} >
                <img src="http://obbjyirz0.bkt.clouddn.com/dfa17b658966be875cd373fa30e07866.jpg" />
              </CardMedia>
            </Card>
        </a>
        <a href="https://maryfand.github.io/html5" className="work-list">
            <Card className="work-card">
              <CardMedia overlay={<CardTitle title="html5" subtitle=" 小 demo" style={styles.title}/>} >
                <img src="http://obbjyirz0.bkt.clouddn.com/5984aa4178474ac207dcd7e92df45b9f.jpg" />
              </CardMedia>
            </Card>
        </a>
        <a href="https://maryfand.github.io/Some-exercises/" className="work-list">
              <Card className="work-card">
                <CardMedia overlay={<CardTitle title="其他案例" subtitle="一些练手作品" style={styles.title}/>} >
                  <img src="http://obbjyirz0.bkt.clouddn.com/c3f7d7a07cb39c2ce2501298d28712a1.jpg" />
                </CardMedia>
              </Card>
        </a>
        <a href="https://maryfand.github.io/100" className="work-list">
              <Card className="work-card">
                <CardMedia overlay={<CardTitle title="react" subtitle="作品集" style={styles.title}/>} >
                  <img src="http://obbjyirz0.bkt.clouddn.com/dfa5d7ca24a4c1ac5dfc53d5188e75f2.jpg" />
                </CardMedia>
              </Card>
        </a>
        <a href="https://maryfand.github.io/100" className="work-list">
              <Card className="work-card">
                <CardMedia overlay={<CardTitle title="javascript" subtitle="我的小案例" style={styles.title}/>} >
                  <img src="http://obbjyirz0.bkt.clouddn.com/a12f9749859f9aef9bcb28fcf7f544a5.jpg" />
                </CardMedia>
              </Card>
        </a>
      </div>
    )
  }
}

export default Works;
