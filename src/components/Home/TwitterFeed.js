import React, { useEffect } from 'react';
import { Card } from 'antd';

export default function TwitterFeed() {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = 'https://platform.twitter.com/widgets.js';
		document.getElementsByClassName("twitter-embed")[0].appendChild(script);
	}, []);

	return (
		<Card className="tutors-card-container">
			<section className={'twitter-container'}>
				<div className={'twitter-embed'}>
					<a className="twitter-timeline" data-width="400" data-height="400" data-dnt="true"
						href="https://twitter.com/NotreDameCA?ref_src=twsrc%5Etfw">Tweets by NotreDameCA</a>
				</div>
			</section>
		</Card>
	);
}
