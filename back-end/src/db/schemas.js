import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema(
	{
		slug: String,
		title: String,
		imageUrl: String,
		imageCred: String,
		imageCredUrl: String,
		author: {
			slug: String,
			imgUrl: String,
			name: String,
		},
		teaser: String,
		body: String,
	},
	{
		timestamps: true,
		toJSON: { virtuals: true },
	}
)

export const Articles = mongoose.model('articles', articleSchema);
