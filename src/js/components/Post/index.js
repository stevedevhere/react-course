import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Button from '../Button';
import s from './styles';

// eslint-disable-next-line no-extend-native
String.prototype.lessThan = function lessThan(max) {
  let tmp = this;
  for (let i = this.length; i >= max; i--) { // eslint-disable-line
    tmp = tmp.slice(0, -1);
  }
  return tmp;
};

export default class Post extends React.Component {
  static propTypes = {
    updateContentToggler: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    data: PropTypes.object.isRequired,
    edit: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.handleShowMore = this.handleShowMore.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleView = this.handleView.bind(this);
  }

  handleShowMore() {
    this.props.updateContentToggler(this.props.data.id);
  }

  contentView = (content) => {
    if (!this.props.data.contentToggle && content.length > 120) return `${content.lessThan(200)}...`;
    return content;
  };

  handleEdit() {
    this.props.edit(String(this.props.index));
  }

  handleDelete() {
    this.props.delete(this.props.index);
  }

  handleView() {
    this.props.push(`/post-${this.props.data.id}`);
  }

  render() {
    const moreOrLess = !this.props.data.contentToggle ? 'Show more' : 'Show less';
    return (
      <article className={s.postContainer(this.props.data.contentToggle)}>
        <h1 className={s.title()}>{this.props.data.title}</h1>
        <p>{this.contentView(this.props.data.description)}</p>
        <ul className={s.linksContainer()}>
          {
            this.props.data.links ? this.props.data.links.map(item => (
              <li key={uuid.v4()} className={s.link()}>
                <a href={item.link} target="_blank">
                  {item.title}
                </a>
              </li>
              ))
              : null
          }
        </ul>
        <div className={s.buttonsContainer()}>
          <Button onClick={this.handleShowMore} text={moreOrLess} />
          <Button onClick={this.handleDelete} text="Delete" />
          <Button onClick={this.handleEdit} text="Edit" />
          <Button onClick={this.handleView} text="View" />
        </div>
      </article>
    );
  }
}
