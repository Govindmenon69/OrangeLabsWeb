// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Us"
					preTitle="Synopsis"
					subTitle="At Orange Labs, we help brands and individuals bring their digital visions to life. Our focus is on creating websites and digital solutions that are not only visually appealing but also highly functional and user-friendly. Whether you’re a business looking to stand out or an individual wanting to make an impact online, we’re here to bring your ideas to fruition. Our team combines creativity with the latest technology to deliver tailored, effective digital experiences that help you connect with your audience and achieve your goals."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="https://c.tenor.com/NwY5ppxLs_oAAAAd/tenor.gif" alt="ADILIKESEARTH" width={600} height={800}/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Web Design"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Our web design expertise ensures that each website we create is both visually captivating and user-friendly. We focus on aesthetics, layout, and functionality to make sure users have a seamless experience that reflects the client’s unique brand and message."
						/>
						<BadgesBlock 
							title="Other services" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="We have much more services than web design some are listed below"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'Asset Design', 		                    type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	                    type: 'fad' },
	{ key: 'window', 			name: 'Online Presence Strategy', 	            type: 'fad' },
	{ key: 'cubes', 			name: 'Branding and Marketing Design',         	type: 'far' },
	{ key: 'layer-plus', 		name: 'Backend Systems',         	            type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 	                    	type: 'fad' },
]  