import React from "react";
import CollectonItem from "../collection-item/collection-item.component";
import './collection-preview.scss'
const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items.filter((item,index)=>index<4).map(({id, ...otherCollectionItems}) => (
        <CollectonItem key={id} {...otherCollectionItems} />
      ))}
    </div>
  </div>
);
export default CollectionPreview;
