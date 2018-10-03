import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
// import { fixDate } from './utils';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
	const posts = [
		{
			createdAt: moment().format(),
			slug: 'test',
			_id: '12',
			title: 'This is a test',
			imageUrl: 'https://images.unsplash.com/photo-1536060316316-2466bda904f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4d935cedb30c335a14affb922b820ec&auto=format&fit=crop&w=1100&q=80',
			author: {
				slug: 'myName',
				imgUrl: 'https://images.unsplash.com/photo-1536060316316-2466bda904f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4d935cedb30c335a14affb922b820ec&auto=format&fit=crop&w=1100&q=80',
				name: 'Avery',
			},
			teaser: "This is a teaser",
		}
	];
    return (
      <div>
        <Header/>
        <main className="container">
          {
            posts &&
            posts.map(post => {
              const friendlyDate = post.createdAt;
              post.friendlyDate = friendlyDate.month + ' ' + friendlyDate.date
              return (
                  <div className="card" data-href={`/${post.slug}`} key={post._id}>
                  {
                    post.imageUrl &&
                    <a href={`/${post.slug}`} className="blog-post-hero blog-post-hero--short" style={{ backgroundImage: `url(${post.imageUrl})`}}></a>
                  }
                  <div className="card-padding">
                    <h2 className="blog__title blog__title--small">
                      <a href={`/${post.slug}`}>{post.title}</a>
                    </h2>
                    <div className="blog__author">
                      <a href={`/author/${post.author.slug}`}>
                        <div className="blog__author-image" style={{ backgroundImage: `url(${post.author.imgUrl}?w=100)`}}></div>
                      </a>
                      <div className="blog__author-title">by <a href={`/author/${post.author.slug}`}>{post.author.name}</a> on {post.friendlyDate}</div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="blog__teaser droid" dangerouslySetInnerHTML={{__html: post.teaser}}></div>
                    <div className="blog__read-more">
                      <a href={`/${post.slug}`}>Read more...</a>
                    </div>
                  </div>
                </div>  
              )
            })
          }
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
