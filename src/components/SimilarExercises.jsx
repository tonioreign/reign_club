import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
        <Typography
            sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }}
            fontWeight={700}
            color="#000"
            mb="33px"
        >
            Similar{' '}
            <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
                Target Muscle
            </span>{' '}
            exercises
        </Typography>
        <Typography
            sx={{
                fontSize: { lg: '44px', xs: '25px' },
                ml: '20px',
                mt: { lg: '100px', xs: '60px' },
            }}
            fontWeight={700}
            color="#000"
            mb="33px"
        >
            Similar{' '}
            <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
                Equipment
            </span>{' '}
            exercises
        </Typography>
    </Box>
);

export default SimilarExercises;
