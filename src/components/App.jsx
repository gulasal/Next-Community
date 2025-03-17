import Card from './Cards'

function App() {
	const data = [
		{
			id: 1,
			title: 'Next.js',
			category: 'full-stack',
			image:
				'https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo0Dlnm5upQTl9a4CLgOmnEFkfdiNbwx068Xc3o&w=3840&q=75&dpl=dpl_2aRpdJ4YsfDj97kNGcewSVSQRmua',
		},
		{
			id: 2,
			title: 'React.js',
			category: 'frontend',
			image:
				'https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo0Dlnm5upQTl9a4CLgOmnEFkfdiNbwx068Xc3o&w=3840&q=75&dpl=dpl_2aRpdJ4YsfDj97kNGcewSVSQRmua',
		},
		{
			id: 3,
			title: 'Vue.js',
			category: 'frontend',
			image:
				'https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo0Dlnm5upQTl9a4CLgOmnEFkfdiNbwx068Xc3o&w=3840&q=75&dpl=dpl_2aRpdJ4YsfDj97kNGcewSVSQRmua',
		},
	]
	return (
		<div className='app'>
			{data.map(item => (
				<Card
					category={item.category}
					title={item.title}
					image={item.image}
					key={item.id}
				/>
			))}
			{/* <Card
				title='Next.js'
				category='full-stack'
				image='https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo0Dlnm5upQTl9a4CLgOmnEFkfdiNbwx068Xc3o&w=3840&q=75&dpl=dpl_2aRpdJ4YsfDj97kNGcewSVSQRmua'
			/>
			<Card
				title='React.js'
				category='frontend'
				image='https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo0Dlnm5upQTl9a4CLgOmnEFkfdiNbwx068Xc3o&w=3840&q=75&dpl=dpl_2aRpdJ4YsfDj97kNGcewSVSQRmua'
			/>
			<Card
				title='Vue.js'
				category='frontend'
				image='https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo0Dlnm5upQTl9a4CLgOmnEFkfdiNbwx068Xc3o&w=3840&q=75&dpl=dpl_2aRpdJ4YsfDj97kNGcewSVSQRmua'
			/> */}
		</div>
	)
}

export default App
