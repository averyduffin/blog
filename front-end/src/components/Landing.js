import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { getPosts } from '../store/actions/posts';


class Landing extends React.Component {
	componentDidMount() {
		const { getPosts } = this.props;
		getPosts();
	}
	render() {
		const { posts } = this.props;
		return (
		<main className="container">
			{
				posts &&
				posts.map(post => {
				const friendlyDate = post.createdAt;
				post.friendlyDate = friendlyDate.month + ' ' + friendlyDate.date
				return (
					<div className="card" data-href={`/article/${post.slug}`} key={post._id}>
					{
						post.imageUrl &&
						<a href={`/article/${post.slug}`} className="blog-post-hero blog-post-hero--short" style={{ backgroundImage: `url(${post.imageUrl})`}}></a>
					}
					<div className="card-padding">
						<h2 className="blog__title blog__title--small">
						<a href={`/article/${post.slug}`}>{post.title}</a>
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
						<a href={`/article/${post.slug}`}>Read more...</a>
						</div>
					</div>
					</div>  
				)
				})
			}
		</main>);
	}
}

const mapDispatchToProps = dispatch => ({
	getPosts: () => dispatch(getPosts()),
});

export default connect(({ posts }) => ({posts: posts.posts}), mapDispatchToProps)(Landing);