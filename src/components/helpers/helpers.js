export const picture = (component, aSet, uniqkey) => {
  const aMedia = ['(min-width: 1600px)', '(min-width: 768px)', '(min-width: 0px)'];
  const sources = aMedia.map((query, i) => {
    return <source key={`${uniqkey}-${i}`} srcSet={aSet[i]} media={query} />;
  });
  return (
    <picture>
      {sources}
      {component}
    </picture>
  );
};
/**
 * @function hudiniNavbar
 * @argument {object} el the element
 * @argument {array} value two value to switch between 
 * @argument {bool} bool indicate when to switch
 * @argument {string} sStyle the style
 * @summary change element background if page scrolled
 */
export const hudiniElement = (el, value, bool, sStyle = 'background') => {
  bool ? (el.style[sStyle] = value[0]) : (el.style[sStyle] = value[1]);
};

export const nodeToArray = node => {
  var nodesArray = [].slice.call(node);
  return nodesArray;
};

export const renderBlocks = aBlock => {
  return aBlock.map(block => {
    return block.bold ?<span className='bold' key={block.text}>{block.text}</span> :<p key={block.text}>{block.text}</p>;
  });
};
