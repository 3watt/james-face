const rosnodejs = require('rosnodejs')

ros = {
	init: async function () {
		await rosnodejs.initNode('face', { onTheFly: true })
	},
	onEmotionChanged: function (handler) {
		const nh = rosnodejs.nh
		const sub = nh.subscribe(
			'/set_emotion',
			'std_msgs/String',
			(msg) => {
        		console.log('Msg received: ' + msg.data)
				handler(msg.data)
			}
		)
	}
}

module.exports = ros
