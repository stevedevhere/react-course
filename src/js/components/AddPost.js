import React from 'react';
import Notify from './Notify';
// Мне кажется что, чтобы у нас заработало добавление, нам нужно присоединить 
// наш компонент к store и передать в компонент обернутуюю в dispatch функцию 
// результат которой попадет в reducer который это обработает....... но 
// ..но... я бы рекомендовал вам зайти в компонент в котором используется этот 
// компонент и прочитать коментарий там

export default class AddPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            links: [],
            editedLinks: {
                title: "",
                link: ""
            },
            notify: false
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this); 
    }

    handleOnSubmit(event) {
        event.preventDefault();

        if(this.refs.title.value.trim() !== '' || this.refs.description.value.trim() !== '') {
            let new_post = {
                title: this.refs.title.value,
                description: this.refs.description.value,
            };
            
            console.log(this.state.links)
            if(this.state.links.length  != 0) {
                new_post = {...new_post, links: [ ...this.state.links ]};
            }

            this.props.addPost(new_post);
            this.setState({links: [], notify: true})

            
        }
    };

    handleLinkUpdate = () => {
        if(this.state.editedLinks.title !== this.refs.l_title.value) 
            this.setState({editedLinks: { ...this.state.editedLinks, title: this.refs.l_title.value }})

        if(this.state.editedLinks.link !== this.refs.l_link.value) 
            this.setState({editedLinks: { ...this.state.editedLinks, link: this.refs.l_link.value }})
    }

    unmountNotify = () => {
        this.setState({notify: false})
    }

    addNewLink = () => {
        this.setState({ 
            links: [ ...this.state.links, this.state.editedLinks ]
        });
    }

    componentDidUpdate() {
        this.refs.title.value = '';
        this.refs.description.value = '';
        this.refs.l_title.value = ''
        this.refs.l_link.value = ''
    }

    render() {
        return (
            <div className="add-post">
                <h3>Add new post</h3>
                { this.state.notify ? <Notify title={this.refs.title.value} unmount={this.unmountNotify} /> : null }
                <input ref="l_title" onChange={this.handleLinkUpdate} />
                <input ref="l_link" onChange={this.handleLinkUpdate} />
                <button onClick={this.addNewLink} children="add link"/>

                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" ref="title" placeholder="Post title"/>
                    <textarea ref="description" placeholder="Post content"/>
                    <button type="submit">Создать новый пост</button>
                </form>
            </div>
        );
    }
}