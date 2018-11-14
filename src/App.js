import React, { Component } from 'react';
//import logo from './logo.svg';
import { Column, Row } from 'simple-flexbox';
import './App.css';
import SearchAppBar from './SearchBar';
//import Login from './login';
import Card from './card';
import axios from 'axios';
import NewsCard from './newscard';
import Weather from './weather';
import CardMedia from '@material-ui/core/CardMedia';
class App extends Component {

  state={
    persons :[],
    n : '',
    temp:[]
  }
  componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?' +
'country=in&' +
'apiKey=a077679a4f504e31bf47ab838b535296')
      .then(res => {
        const persons = res.data.articles;
        console.log(persons);
        this.setState({ persons:persons});
      })
      var temp=[];
      var cities=['Bangalore','Mumbai','Delhi']
      for(var i in cities){
      axios.get('http://api.apixu.com/v1/current.json?key=1d7e09cfe40e4e26982131728180911&q='+cities[i])
            .then(res => {
              const r = [res.data.location.name,res.data.current.temp_c,res.data.current.condition.text,res.data.current.condition.icon];
              console.log();
              temp.push(res.data);
              
              if(i==2){
                //console.log(temp)
                this.setState({ temp:temp});}
            })}

  }
  render() {
    var news = [['CNN','https://www.youtube.com/embed/9HYxGr8MZL8',"Cable News Network is an American news-based pay television channel owned by Turner Broadcasting System, a division of AT&T's WarnerMedia. CNN was founded in 1980 by American media proprietor Ted Turner as a 24-hour cable news channel."],['INDIA TV','https://www.youtube.com/embed/5TEOMngiZ0E',"India TV is a Hindi News channel based in Noida, Uttar Pradesh, India. The channel was launched on 20 May 2004 by Rajat Sharma and wife Ritu Dhawan. The channel is the flagship service of Independent News Service, which was co-founded by Sharma and Dhawan in 1997."],['INDIA TODAY','https://www.youtube.com/embed/62rmi9KMvVE',"India Today was established in 1975 by Vidya Vilas Purie (owner of Thompson Press), with his daughter Madhu Trehan as its editor and his son Aroon Purie as its publisher.At present, India Today is also published in Hindi, Kannada, Tamil, Malayalam and Telugu. The India Today news channel was launched on 22 May 2015."],['TV9 KANNADA','https://www.youtube.com/embed/wfDSivif3FI',"TV9 Kannada is an Indian television news channel broadcast in Kannada language. Owned by the The Associated Broadcasting Company Pvt. Ltd., it was launched on 22 June 2006. The channel has airs programs as hourly news, and on analysis of major news events and interviews."]];
    var rows = [];
for (var i = 0; i < 4; i++) {
    // note: we add a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<Column ><Card key={i} li={news[i]} /></Column>);
}
console.log(rows);



    return (

      <div className="App">
      <SearchAppBar Name="NewsApp"/>
      <Row>
      {rows}
      </Row>
      <Row>
      <Column horizontal="center">

      {this.state.temp.map(e => (<Weather
          city={e.location.name}
          temp= {e.current.temp_c}
          condition = {e.current.condition.text}
          im ={e.current.condition.icon}
        />
                    ))}
      </Column>
      <Column horizontal="center">
      {this.state.persons.map(e => (<NewsCard
                        author = {e.author}
                        title={e.title}
                        content={e.content}
                        desc = {e.description}
                        im = {e.urlToImage}
                        date = {e.publishedAt}
                        name = {e.source.name}
                        url = {e.url}/>
                    ))}
      </Column>
      <Column>
      <script type="text/javascript">var _mcq=["6",""];</script><span id='_mc_mg6'></span><script language="JavaScript" src="https://stat1.moneycontrol.com/mcjs/common/https_mc_widget.js"></script><noscript><a href="https://www.moneycontrol.com">Sensex/Nifty</a></noscript>
      <card>
        <CardMedia src="https://stat1.moneycontrol.com/mcjs/common/https_mc_widget.js">
        </CardMedia>
        </card>
      </Column>
      </Row>
      </div>
    );
  }
}

export default App;