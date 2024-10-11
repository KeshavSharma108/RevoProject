import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Nodata from '../Nodata/Nodata';
import { ios } from '../../const/deviceInfo';
import LoadingCompo from '../LoadingCompo/LoadingCompo';

interface InfiniteScrollProps {
    data: any[];
    query: {
        fetchNextPage: () => void;
        hasNextPage: boolean;
        isFetchingNextPage: boolean;
        isLoading: boolean;
        isFetching: boolean;
        refetch: () => void;
    };
    renderItems: ({ index, item }: { index: number; item: any }) => JSX.Element;
    noData?: JSX.Element;
    gap?: number;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
    data = [],
    query,
    renderItems,
    noData = <Nodata />,
    gap = 0,
}) => {
    const [refreshing, setRefreshing] = useState(false);

    const { fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isFetching } = query || {};

    const onEndReach = () => {
        if (hasNextPage && !isLoading && data?.length > 0) {
            fetchNextPage && fetchNextPage();
        }
    };

    const onRefresh = () => {
        setRefreshing(true);
        // Call refetch if available in query
        query?.refetch && query.refetch();
        setRefreshing(false);
    };

    return (
        <FlatList
            data={data}
            renderItem={({ index, item }) => renderItems({ index, item })}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: ios ? 60 : 100,
                paddingTop: gap,
            }}
            ListEmptyComponent={
                <>
                    {isLoading && <LoadingCompo />}
                    {data.length === 0 && !isLoading && noData}
                </>
            }
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            ListFooterComponent={
                isFetchingNextPage ? (
                    <ActivityIndicator size="small" color="#002E6B" />
                ) : null
            }
        />
    );
};

export default InfiniteScroll;

const styles = StyleSheet.create({});
