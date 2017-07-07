import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'tree-view': {
    'overflowY': 'hidden'
  },
  'tree-view_item': {
    // immediate child of .tree-view, for styling convenience
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'cursor': 'pointer',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'tree-view_item:hover': {
    'background': '#f2f3f7'
  },
  'tree-view_children info:hover': {
    'background': '#f2f3f7'
  },
  // style for the children nodes container
  'tree-view_children': {
    // margin-left: 16px;
  },
  'tree-view_children tree-view tree-view_item': {
    'paddingLeft': [{ 'unit': 'px', 'value': 16 }]
  },
  'tree-view_children info': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 25 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'info img': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'borderRadius': '50%',
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'tree-view_children-collapsed': {
    'height': [{ 'unit': 'px', 'value': 0 }]
  },
  'tree-view_arrow': {
    'width': [{ 'unit': 'px', 'value': 10 }],
    'height': [{ 'unit': 'px', 'value': 10 }],
    'background': 'url(./tree-view_arrow.png) no-repeat center',
    'cursor': 'pointer',
    'marginRight': [{ 'unit': 'px', 'value': 6 }],
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'display': 'inline-block',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none'
  },
  'tree-view_arrow:after': {
    // content: '\25BE';
  },
  // rotate the triangle to close it
  'tree-view_arrow-collapsed': {
    'WebkitTransform': 'rotate(-90deg)',
    'MsTransform': 'rotate(-90deg)',
    'transform': 'rotate(-90deg)'
  }
});
