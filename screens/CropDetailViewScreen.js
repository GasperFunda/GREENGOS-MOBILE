import React from 'react';
import * as ExamplePropertiesApi from '../apis/ExamplePropertiesApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { MapMarker, MapView } from '@draftbit/maps';
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  ImageBackground,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const CropDetailViewScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  const mapViewZazZaXaERef = React.useRef();

  return (
    <ScreenContainer
      hasTopSafeArea={true}
      hasSafeArea={false}
      scrollable={true}
    >
      <ExamplePropertiesApi.FetchIndividualPropertyGET method={'GET'} id={1}>
        {({ loading, error, data, refetchIndividualProperty }) => {
          const fetchData = data;
          if (!fetchData || loading) {
            return <ActivityIndicator />;
          }

          if (error) {
            return (
              <Text style={{ textAlign: 'center' }}>
                There was a problem fetching this data
              </Text>
            );
          }

          return (
            <>
              <View
                style={StyleSheet.applyWidth(
                  { height: 420, width: '100%' },
                  dimensions.width
                )}
              >
                <ImageBackground
                  style={StyleSheet.applyWidth(
                    {
                      height: '100%',
                      justifyContent: 'flex-end',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                  source={{ uri: `${fetchData?.image_url}` }}
                  resizeMode={'cover'}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        paddingBottom: 24,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 24,
                      },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors.primary,
                          borderRadius: 8,
                          flexDirection: 'row',
                          paddingBottom: 6,
                          paddingLeft: 12,
                          paddingRight: 8,
                          paddingTop: 6,
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.surface,
                              fontFamily: 'Poppins_500Medium',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'Only $'}
                          {fetchData?.nightly_price}
                          {' per night'}
                        </Text>
                      </View>

                      <View>
                        {/* Button Outline */}
                        <Button
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: 'transparent',
                              borderBottomWidth: 2,
                              borderColor: theme.colors.surface,
                              borderLeftWidth: 2,
                              borderRadius: 8,
                              borderRightWidth: 2,
                              borderTopWidth: 2,
                              borderWidth: 1,
                              color: theme.colors.surface,
                              fontFamily: 'Poppins_700Bold',
                              textAlign: 'center',
                            },
                            dimensions.width
                          )}
                          title={'BOOK'}
                        />
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>

              <View>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      paddingBottom: 24,
                      paddingLeft: 24,
                      paddingRight: 24,
                      paddingTop: 24,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.light,
                        fontFamily: 'Poppins_400Regular',
                        fontSize: 12,
                      },
                      dimensions.width
                    )}
                  >
                    {fetchData?.city}
                  </Text>

                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Poppins_600SemiBold',
                        fontSize: 22,
                      },
                      dimensions.width
                    )}
                    textBreakStrategy={'highQuality'}
                    ellipsizeMode={'tail'}
                    allowFontScaling={true}
                    numberOfLines={2}
                  >
                    {fetchData?.name}
                  </Text>
                  <Spacer top={8} right={8} bottom={8} left={8} />
                  <View>
                    <View
                      style={StyleSheet.applyWidth(
                        { flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            alignSelf: 'stretch',
                            backgroundColor: theme.colors.surface,
                            borderBottomWidth: 1,
                            borderColor: theme.colors.divider,
                            borderLeftWidth: 1,
                            borderRadius: 8,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            paddingBottom: 8,
                            paddingLeft: 8,
                            paddingRight: 8,
                            paddingTop: 8,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          name={'MaterialCommunityIcons/bed-king'}
                          size={24}
                          color={theme.colors.primary}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.medium,
                              fontFamily: 'Poppins_400Regular',
                              fontSize: 12,
                            },
                            dimensions.width
                          )}
                        >
                          {fetchData?.beds}
                          {' beds'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            alignSelf: 'stretch',
                            backgroundColor: theme.colors.surface,
                            borderBottomWidth: 1,
                            borderColor: theme.colors.divider,
                            borderLeftWidth: 1,
                            borderRadius: 8,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            paddingBottom: 8,
                            paddingLeft: 8,
                            paddingRight: 8,
                            paddingTop: 8,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          name={'MaterialIcons/bathtub'}
                          size={20}
                          color={theme.colors.primary}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.medium,
                              fontFamily: 'Poppins_400Regular',
                              fontSize: 12,
                            },
                            dimensions.width
                          )}
                        >
                          {fetchData?.bathrooms}
                          {' baths'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: theme.colors.surface,
                            borderBottomWidth: 1,
                            borderColor: theme.colors.divider,
                            borderLeftWidth: 1,
                            borderRadius: 8,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            paddingBottom: 8,
                            paddingLeft: 8,
                            paddingRight: 8,
                            paddingTop: 8,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          name={'MaterialIcons/group'}
                          size={24}
                          color={theme.colors.primary}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.medium,
                              fontFamily: 'Poppins_400Regular',
                              fontSize: 12,
                            },
                            dimensions.width
                          )}
                        >
                          {fetchData?.maxGuests}
                          {' max'}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Poppins_600SemiBold',
                          fontSize: 16,
                        },
                        dimensions.width
                      )}
                    >
                      {'Rates'}
                    </Text>
                    <Spacer top={6} right={8} bottom={6} left={8} />
                    <View
                      style={StyleSheet.applyWidth(
                        { flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Poppins_400Regular',
                            },
                            dimensions.width
                          )}
                        >
                          {'Nightly'}
                        </Text>
                      </View>

                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Poppins_500Medium',
                            },
                            dimensions.width
                          )}
                        >
                          {'$'}
                          {fetchData?.nightly_price}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      style={StyleSheet.applyWidth(
                        { height: 1, marginBottom: 12, marginTop: 12 },
                        dimensions.width
                      )}
                      color={theme.colors.lightest}
                    />
                    <View
                      style={StyleSheet.applyWidth(
                        { flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Poppins_400Regular',
                            },
                            dimensions.width
                          )}
                        >
                          {'Weekly'}
                        </Text>
                      </View>

                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Poppins_500Medium',
                            },
                            dimensions.width
                          )}
                        >
                          {'$'}
                          {fetchData?.weekly_price}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      style={StyleSheet.applyWidth(
                        { height: 1, marginBottom: 12, marginTop: 12 },
                        dimensions.width
                      )}
                      color={theme.colors.lightest}
                    />
                    <View
                      style={StyleSheet.applyWidth(
                        { flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Poppins_400Regular',
                            },
                            dimensions.width
                          )}
                        >
                          {'Monthly'}
                        </Text>
                      </View>

                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Poppins_500Medium',
                            },
                            dimensions.width
                          )}
                        >
                          {'$'}
                          {fetchData?.monthly_rental_price}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Poppins_600SemiBold',
                          fontSize: 16,
                        },
                        dimensions.width
                      )}
                    >
                      {'Description'}
                    </Text>
                    <Spacer top={6} right={8} bottom={6} left={8} />
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.medium,
                          fontFamily: 'Poppins_400Regular',
                          fontSize: 14,
                          lineHeight: 26,
                          textAlign: 'left',
                        },
                        dimensions.width
                      )}
                    >
                      {fetchData?.description}
                    </Text>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Poppins_600SemiBold',
                          fontSize: 16,
                        },
                        dimensions.width
                      )}
                    >
                      {'More'}
                    </Text>
                    <Spacer top={6} right={8} bottom={6} left={8} />
                    <View
                      style={StyleSheet.applyWidth(
                        { flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Poppins_400Regular',
                            },
                            dimensions.width
                          )}
                        >
                          {'Cancellation'}
                        </Text>
                      </View>

                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Poppins_500Medium',
                            },
                            dimensions.width
                          )}
                        >
                          {fetchData?.cancellation_policy}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      style={StyleSheet.applyWidth(
                        { height: 1, marginBottom: 12, marginTop: 12 },
                        dimensions.width
                      )}
                      color={theme.colors.lightest}
                    />
                    <View
                      style={StyleSheet.applyWidth(
                        { flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Poppins_400Regular',
                            },
                            dimensions.width
                          )}
                        >
                          {'Minimum stay'}
                        </Text>
                      </View>

                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                      >
                        <>
                          {!fetchData?.min_stay ? null : (
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Poppins_500Medium',
                                },
                                dimensions.width
                              )}
                            >
                              {fetchData?.min_stay}
                            </Text>
                          )}
                        </>
                        <>
                          {fetchData?.min_stay ? null : (
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Poppins_500Medium',
                                },
                                dimensions.width
                              )}
                            >
                              {'No minimum'}
                            </Text>
                          )}
                        </>
                      </View>
                    </View>
                    <Divider
                      style={StyleSheet.applyWidth(
                        { height: 1, marginBottom: 12, marginTop: 12 },
                        dimensions.width
                      )}
                      color={theme.colors.lightest}
                    />
                    <View
                      style={StyleSheet.applyWidth(
                        { flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Poppins_400Regular',
                            },
                            dimensions.width
                          )}
                        >
                          {'Cleaning fee'}
                        </Text>
                      </View>

                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Poppins_500Medium',
                            },
                            dimensions.width
                          )}
                        >
                          {fetchData?.cleaning_fee}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Spacer top={16} right={8} bottom={16} left={8} />
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors.surface,
                        borderRadius: 16,
                        paddingBottom: 8,
                        paddingLeft: 8,
                        paddingRight: 8,
                        paddingTop: 8,
                      },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        { borderRadius: 10, height: 240, overflow: 'hidden' },
                        dimensions.width
                      )}
                    >
                      <MapView
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                        latitude={fetchData?.latitude}
                        longitude={fetchData?.longitude}
                        zoomEnabled={true}
                        rotateEnabled={true}
                        scrollEnabled={true}
                        loadingEnabled={true}
                        showsPointsOfInterest={true}
                        zoom={16}
                        apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
                        ref={mapViewZazZaXaERef}
                      >
                        <MapMarker
                          longitude={fetchData?.longitude}
                          title={fetchData?.name}
                          latitude={fetchData?.latitude}
                          pinColor={theme.colors.primary}
                        />
                      </MapView>
                    </View>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                </View>
              </View>
            </>
          );
        }}
      </ExamplePropertiesApi.FetchIndividualPropertyGET>
    </ScreenContainer>
  );
};

export default withTheme(CropDetailViewScreen);
