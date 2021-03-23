import './App.css';
import React from 'react';

class NewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes,
      title: props.title,
      content: props.content,
    }
  }
  render() {
    return (
      <div className="list-group-item d-flex justify-content-between">
        <div><div className="font-weight-bold">{this.state.title}</div>
          <div><em>{this.state.content}</em></div>
        </div>
        <div><span className="mr-3">Likes - {this.state.likes}</span>
        </div>
      </div>);
  }
}

class News extends React.Component {
  constructor(props) {
    super(props);
    var sec = props.newsSectionTitle;
    var items = [ { key: 1, title: "First title in " + sec, content: "First content", likes: Math.floor(Math.random() * 100) },
      { key: 2, title: "Second title in " + sec, content: "Second content", likes: Math.floor(Math.random() * 100) },
      { key: 3, title: "Third title in " + sec, content: "Third content", likes: Math.floor(Math.random() * 100) }];
    this.state = { news: items, newsTitle: sec, orderMessage: "Not ordered" }
    this.sortNewsAsc = this.sortNewsAsc.bind(this);
    this.sortNewsDesc = this.sortNewsDesc.bind(this);
  }
  sortNewsAsc() {
    var items = this.state.news.sort((a, b) => (a.likes > b.likes) ? 1 : -1);
    this.setState({ news: items, orderMessage: "Ordered by ascending" });
  }
  sortNewsDesc() {
    var items = this.state.news.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
    this.setState({ news: items, orderMessage: "Ordered by descending" });
  }
  render() {
    return (<div className="mt-3">
      <h3>{this.state.newsTitle}
        <button className="btn bt-sm btn-primary ml-2 mr-2" onClick={this.sortNewsAsc}>Sort by likes ascending</button>
        <button className="btn bt-sm btn-primary" onClick={this.sortNewsDesc}>Sort by likes descending</button>
      </h3><em>{this.state.orderMessage}</em>
      <div className="list-group">
        {this.state.news.map((value, index) => {
          return <NewsItem title={value.title} content={value.content} likes={value.likes} key={value.key} />
        })
        }
      </div>
    </div>);
  }
}

function App() {
  return (
    <div className="App">
      <section className="container">
        <div className="row">
          <div className="col-12" id="clock_id">
            <News newsSectionTitle="First news section" />
            <News newsSectionTitle="Second news section" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
