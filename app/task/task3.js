import React, {Component} from 'react'
import {Text, FlatList, Image, ScrollView, View } from 'react-native'
import {Container, Content, Item, List, ListItem, Body, Right, Thumbnail,} from 'native-base'
import axios from 'axios'

export default class Task3 extends Component{
	constructor (){
  super()
  this.state={
  	videos:[]
  }
 }
  	componentWillMount(){
  		const self=this
  		axios({
			method :'get',
			url:'https://dog.ceo/api/breed/boxer/images',
			headers:{
                    "Content-Type":"application/json"
            },
		}).then(function(response){
			console.log(response.data.message)
			self.setState({videos: response.data.message})
			console.log(self.state.videos)
		})
  	}
	render(){
		console.log(this.state.videos)
		return(
			<Container>
				<Content>
					<List>
						<ListItem itemDivider>
							<Text>Gallery</Text>
						</ListItem>
					</List>
					<ScrollView>
						<FlatList
							data={this.state.videos}
							renderItem={({item})=>
								<View>
									<Image source={{uri:item}} style={{
										width:90,height:90
									}}/>
								</View>
							}
							initialNumToRender={16}
							numColumns={4}
						/>
					</ScrollView>
				</Content>
			</Container>
			)
	}
}