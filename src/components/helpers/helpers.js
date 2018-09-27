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
 * @argument {string} id
 * @argument {array} aColor
 * @argument {object} ref
 * @summary change element background if page scrolled
 */
export const hudiniElement = (el, aColor, bool, sStyle) => {
  const styleType = sStyle || 'background';
  bool ? (el.style[styleType] = aColor[0]) : (el.style[styleType] = aColor[1]);
};

export const nodeToArray = node => {
  var nodesArray = [].slice.call(node);
  return nodesArray;
};

export const renderBlocks = (aBlock) => {
  return aBlock.map(block => {
    return <p key={block.text}>{block.text}</p>;
  });
};
