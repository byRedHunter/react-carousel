import './App.css'

// components
import Slider from './components/Slider'

function App() {
	const images = [
		{
			id: '1',
			title: 'Awesome forest',
			image:
				'https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg',
		},
		{
			id: '2',
			title: 'A litle bird.',
			image:
				'https://cdn.pixabay.com/photo/2011/09/27/18/52/bird-9950_960_720.jpg',
		},
		{
			id: '3',
			title: 'The best friend.',
			image:
				'https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg',
		},
		{
			id: '4',
			title: 'Beautiful desert.',
			image:
				'https://cdn.pixabay.com/photo/2016/11/21/17/44/arches-national-park-1846759_960_720.jpg',
		},
		{
			id: '5',
			title: 'Harley Davidson motorcycle.',
			image:
				'https://cdn.pixabay.com/photo/2018/10/26/22/55/harley-davidson-3775527_960_720.jpg',
		},
	]

	return (
		<div className='App'>
			<Slider images={images} />
		</div>
	)
}

export default App
