import React from 'react';
import { SafeAreaView, View } from 'react-native';

type Props = {
    children: React.ReactNode;
    space?: number;
    direction?: 'column' | 'row';
}

export default function Stack({ children, space = 16, direction = 'column' }: Props) {
    return (
        <SafeAreaView style={{ flexWrap: 'wrap', flexDirection: direction }}>
            {React.Children.map(children, (child: React.ReactNode, index: number) => (
                <View
                    key={index}
                    style={{
                        [direction === 'column' ? 'marginBottom' : 'marginRight']:
                            space
                    }}
                >
                    {child}
                </View>
            ))}
        </SafeAreaView>
    )
}