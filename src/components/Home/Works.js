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
          <Card className="work-card">
            <CardMedia overlay={<CardTitle title="百日百页面" subtitle="初学前端每日笔记" style={styles.title}/>} >
              <img src="http://obbjyirz0.bkt.clouddn.com/668573_210906041541_2~001.jpg" />
            </CardMedia>
          </Card>
          <Card className="work-card">
            <CardMedia overlay={<CardTitle title="文档手册" subtitle="我的个人博客" style={styles.title}/>} >
              <img src="http://obbjyirz0.bkt.clouddn.com/668573_210906041541_2~001.jpg" />
            </CardMedia>
          </Card>
          <Card className="work-card">
            <CardMedia overlay={<CardTitle title="自制时钟" subtitle="canvas 小 demo" style={styles.title}/>} >
              <img src="http://obbjyirz0.bkt.clouddn.com/668573_210906041541_2~001.jpg" />
            </CardMedia>
          </Card>

          <Card className="work-card">
            <CardMedia overlay={<CardTitle title="其他案例" subtitle="一些练手作品" style={styles.title}/>} >
              <img src="http://obbjyirz0.bkt.clouddn.com/668573_210906041541_2~001.jpg" />
            </CardMedia>
          </Card>

          <Card className="work-card">
            <CardMedia overlay={<CardTitle title="初学小做" subtitle="大三上学期参赛作品" style={styles.title}/>} >
              <img src="http://obbjyirz0.bkt.clouddn.com/668573_210906041541_2~001.jpg" />
            </CardMedia>
          </Card>

          <Card className="work-card">
            <CardMedia overlay={<CardTitle title="初学小做" subtitle="大三上学期参赛作品" style={styles.title}/>} >
              <img src="http://obbjyirz0.bkt.clouddn.com/668573_210906041541_2~001.jpg" />
            </CardMedia>
          </Card>
      </div>
    )
  }
}

export default Works;
