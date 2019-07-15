import React from 'react';
import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import CardSection from 'components/CardSection';

const AlbumDetail = props => {
  const { album } = props;
  const {
    headerContentStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
  } = styles;
  console.log(album.url);
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: album.thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: album.image }} />
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

AlbumDetail.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    thumbnail_image: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlbumDetail;
