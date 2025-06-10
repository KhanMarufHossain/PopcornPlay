import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { showMovies } from '../../../services/api';

const MoviesHome = () => {
  const [data, setData] = useState({
    movies: [],
    currentPage: 1,
    totalPages: 0,
    totalResults: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = async (page = 1, shouldAppend = false) => {
    setLoading(true);
    try {
      const result = await showMovies(page);
      
      if (shouldAppend) {
        setData(prevData => ({
          ...result,
          movies: [...prevData.movies, ...result.movies]
        }));
      } else {
        setData(result);
      }
      
      setError(null);
    } catch (err) {
      console.error('Error fetching movies:', err);
      setError(err.message || 'Failed to fetch movies');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  const renderMovieCard = ({ item }) => (
    <TouchableOpacity style={styles.movieCard}>
      {/* Using the processed image URL directly */}
      <Image 
        source={{ uri: item.posterUrl }}
        style={styles.poster}
        resizeMode="cover"
      />
      <View style={styles.movieInfo}>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.rating}>⭐ {item.vote_average.toFixed(1)}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleLoadMore = () => {
    if (data.currentPage < data.totalPages && !loading) {
      fetchMovies(data.currentPage + 1, true);
    }
  };

  if (loading && data.movies.length === 0) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#FF2E63" />
      </View>
    );
  }

  if (error && data.movies.length === 0) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular Movies</Text>
      
      <FlatList
        data={data.movies}
        renderItem={renderMovieCard}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.movieList}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading && data.movies.length > 0 ? (
            <ActivityIndicator size="small" color="#FF2E63" style={styles.loader} />
          ) : null
        }
      />
      
      <Text style={styles.pageInfo}>
        Page {data.currentPage} of {data.totalPages}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
    padding: 12,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
    marginTop: 8,
  },
  movieList: {
    paddingBottom: 16,
  },
  movieCard: {
    flex: 1,
    margin: 8,
    borderRadius: 12,
    backgroundColor: '#16213E',
    overflow: 'hidden',
    elevation: 3,
    maxWidth: '47%',
  },
  poster: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  movieInfo: {
    padding: 12,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 6,
  },
  rating: {
    color: '#FFD700',
    fontSize: 12,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A2E',
  },
  errorText: {
    color: '#FF2E63',
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
  },
  loader: {
    marginVertical: 16,
  },
  pageInfo: {
    textAlign: 'center',
    color: '#8D8DAA',
    marginTop: 8,
    marginBottom: 16,
  },
});

export default MoviesHome;
