import React, {Component} from 'react'
import{Container ,Content, Button, Header, Tabs, Tab} from 'native-base'

import Task1and2 from './task1and2.js'
import Task3 from './task3.js'

export default class IndexPage extends Component{
	render(){
		return(
			<Container>
					<Tabs>
						<Tab heading='Task 1&2'>
							<Task1and2/>
						</Tab>
						<Tab heading='Task 3'>
							<Task3/>
						</Tab>
					</Tabs>
			</Container>
			)
	}
}