import React from 'react';

const SimpleComponent = props => {
    // Это простой компонент, простой он потому что он не является классом, а
    // следовательно не наследуется от специального класса Component.

    // В простом компоненте нет состояний, он лишь отдает jsx, можно статический,
    // а можно с использованием динамически подставляемых данных которые приходят
    // в первый параметр этой функции, который мы, по общему
    // соглашению именуем "props".
    return (
        props.selectedIndex === props.index ? <p>SimpleComponent with index: {props.index}!</p> : false
    )
};

export default SimpleComponent;