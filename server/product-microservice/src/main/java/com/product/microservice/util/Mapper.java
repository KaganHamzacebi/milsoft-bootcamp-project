package com.product.microservice.util;

import org.modelmapper.ModelMapper;
import org.modelmapper.config.Configuration;
import org.modelmapper.convention.MatchingStrategies;

public class Mapper {
    private final static ModelMapper mapper;

    static {
        mapper = new ModelMapper();

        mapper.getConfiguration()
                .setFieldMatchingEnabled(true)
                .setFieldAccessLevel(Configuration.AccessLevel.PRIVATE)
                .setMatchingStrategy(MatchingStrategies.STANDARD)
                .setPreferNestedProperties(false);
    }

    public static ModelMapper getInstance() {
        return mapper;
    }
}
