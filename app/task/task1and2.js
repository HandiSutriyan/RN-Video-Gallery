import React, {Component} from 'react'
import {Text} from 'react-native'
import {Container, Content,
		 Item, Input, Icon, Left,
		 List, ListItem} from "native-base"

export default class Task1and2 extends Component{
	constructor (){
  super()
  this.state={
  		search:'',
	   	videos:[
		   	{
		   		title:'Video 1',
		   	
		   		url:'http://mystorage/video1.jpg'
		   	},
		   	{
		   		title:'Video 2',
		   		url:'http://mystorage/video2.jpg'
		   	},
		   	{
		   		title:'Video 3',
		   		url:'http://mystorage/video3.jpg'
		   	},
	   	]
  }

}

	render(){
		const dataFilter= this.state.videos.filter((filter)=>{
			return filter.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;			
		});
		return(
			<Container style={{paddingTop:20}}>
				<Content>
					<Item>
						<Icon name='search'/>
						 <Input placeholder='Search' value={this.state.search} onChangeText={(text) => this.setState({search:text})}/>
					</Item>
					<List>
						<ListItem itemDivider>
							<Text>List Video</Text>
						</ListItem>
					{dataFilter.map((item,i)=>{
						return(
							<ListItem>
							<Left key={i}>
								<Text>{item.title}</Text>
								<Text note> {item.url}</Text>
							</Left>
						</ListItem>
							)
					})}
					</List>
				</Content>
			</Container>
			)
	}
}