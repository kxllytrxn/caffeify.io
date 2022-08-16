import { TrackFeatures } from 'react-spotify-api'


<TrackFeatures id={topTracks}>
    {(features, loading, error) => (
        features ? (
            features.audio_features.map(feature => (
                <h1 key={feature.id}>{feature.key}</h1>
            ))
        ) : null
    )}
</TrackFeatures>
