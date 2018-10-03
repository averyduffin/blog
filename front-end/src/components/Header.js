import React, { Component } from 'react';


class Header extends Component {
  render() {
    const post = { title: 'blah'};
    const siteTitle = "Ya know";
    const tag = 'tag'
    return [
      <header key={1}>
        <link rel="stylesheet" type="text/css" href="/static/style.css"/>
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet"/>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
        <title>{ post ? post.title + ' |' : '' } Simple React Blog</title>
      </header>,
      <header className="header" key={2}>
        <h1 className="site-title">
          <a href="/">{ siteTitle }</a>
          <small className="site-title__tag">{ tag }</small>
        </h1>
      </header>
    ]
  }
}

export default Header;