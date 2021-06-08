import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta
					name='description'
					content='Personal Website for Upamanyu Das | Software Engineer'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
		</div>
	)
}
