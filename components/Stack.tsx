import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
    children: React.ReactNode;
    space?: number;
    direction?: 'column' | 'row';
};

// this component arranges the child elements with 
// consistent spacing, either in a  column or 
// row. react-native-safe-area-context is being utilised
// to accomodate androids safe area view issue.
// Memoizing added to reduce rerenders.

function Stack({ children, space = 16, direction = 'column' }: Props) {
    const childArray = React.Children.toArray(children);

    return (
        <SafeAreaView
            style={{ flexWrap: 'wrap', flexDirection: direction }}
            edges={['top', 'bottom', 'left', 'right']}
        >
            {childArray.map((child, index) => {
                /**
                 * if the last element, then do not add any margins
                 */
                const isLast = index === childArray.length - 1;
                return (
                    <View
                        key={index}
                        style={{
                            [direction === 'column' ? 'marginBottom' : 'marginRight']: isLast ? 0 : space,
                        }}
                    >
                        {child}
                    </View>
                );
            })}
        </SafeAreaView>
    );
}

export default React.memo(Stack);
