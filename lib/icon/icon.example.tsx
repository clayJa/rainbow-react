import React from 'react';
import Icon from './icon';
import './icon.example.scss'
const icons: Array<string> = [
  "add-user","app-store","bell","check-circle-fill","check-circle","check-square","close-circle-fill",
  "close-circle","close-square","close","code-hide","code","compass","customer-service","delete-user",
  "deployment-unit","detail","down-circle-fill","down-circle","down-square","error","experiment","export",
  "file-copy-fill","folder-add","folder-open","folder","frown","fullscreen-exit","fullscreen","github",
  "heart","home","image","import","info-circle-fill","info-circle","interation","layout","left-circle-fill",
  "left-circle","left-square","like","loading","location","lock","logout","mail","meh","message",
  "minus-circle-fill","minus-circle","minus-square","notification","play-circle","play-square",
  "plus-circle-fill","plus-circle","plus-square","power-off","qq","question-circle","redo","reload",
  "right-circle-fill","right-circle","right-square","setting","single-close","smile","sound","star",
  "sync","undo","unlike","unlock","up-circle-fill","up-circle","up-square","user","video","warning-circle","wechat"];

const IconExample: React.FunctionComponent = () => {
  return (
    <div className={'icon-list'}>
      {
        icons.map(icon => {
          return <div className={'icon-example-item'} key={icon}>
            <Icon name={icon}/>
            <span>{icon}</span>
          </div>
        })
      }
    </div>
  );
};

export default IconExample;
