export type StatusIconwLabelStatus = 'warning';
export type StatusIconwLabelState = 'empty' | 'future';
export type StatusIconwLabelSize = 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 80 | 88;

export interface StatusIconwLabelStateAssets {
  default: string;
  sizes?: Partial<Record<StatusIconwLabelSize, string>>;
}

export type StatusIconwLabelAssetStateMap = Record<StatusIconwLabelState, StatusIconwLabelStateAssets>;
export type StatusIconwLabelAssetMap = Record<StatusIconwLabelStatus, StatusIconwLabelAssetStateMap>;

const WARNING_ICON_ASSETS: StatusIconwLabelAssetStateMap = {
  empty: {
    default: 'https://cdn.builder.io/api/v1/image/assets%2Faf2bc788bfa84b7e872eaeeb48723cea%2Fae06746a2c1449ee923bc8d179001be6?format=webp&width=800',
    sizes: {
      8: 'https://cdn.builder.io/api/v1/image/assets%2Faf2bc788bfa84b7e872eaeeb48723cea%2F3f88b358f36441bbae90d1531bfd85c2?format=webp&width=800',
      16: 'https://cdn.builder.io/api/v1/image/assets%2Faf2bc788bfa84b7e872eaeeb48723cea%2Fb536d6eaf08f4196a64ca7f0f437fcb1?format=webp&width=800',
      24: 'https://cdn.builder.io/api/v1/image/assets%2Faf2bc788bfa84b7e872eaeeb48723cea%2Ff03aa652605d402c8e56e17541a1c10a?format=webp&width=800',
      40: 'https://cdn.builder.io/api/v1/image/assets%2Faf2bc788bfa84b7e872eaeeb48723cea%2F1c788f8f80154649a69b20b46fd1a1b4?format=webp&width=800',
      48: 'https://cdn.builder.io/api/v1/image/assets%2Faf2bc788bfa84b7e872eaeeb48723cea%2F6be2a12ad134446494176bee69579f8a?format=webp&width=800',
      56: 'https://cdn.builder.io/api/v1/image/assets%2Faf2bc788bfa84b7e872eaeeb48723cea%2Fd6d3e9edaf304953af11ddce77dc91f8?format=webp&width=800',
      64: 'https://cdn.builder.io/api/v1/image/assets%2Faf2bc788bfa84b7e872eaeeb48723cea%2F5eba122a53c2441e83e0d39bb349c45c?format=webp&width=800',
      80: 'https://cdn.builder.io/api/v1/image/assets%2Faf2bc788bfa84b7e872eaeeb48723cea%2F37bb3fd5f7cc4889a992e7f7d61b743e?format=webp&width=800',
      88: 'https://cdn.builder.io/api/v1/image/assets%2Faf2bc788bfa84b7e872eaeeb48723cea%2F1846a685170246ddb3aaae192c014dc3?format=webp&width=800',
    },
  },
  future: {
    default: 'https://cdn.builder.io/api/v1/image/assets%2Faf2bc788bfa84b7e872eaeeb48723cea%2Fd168c5c29ac943f5923da2653dc259c7?format=webp&width=800',
    sizes: {
      8: 'https://cdn.builder.io/api/v1/image/assets%2Faf2bc788bfa84b7e872eaeeb48723cea%2F2b4ca8c9edac4430a69ab68dc42af87e?format=webp&width=800',
      16: 'https://cdn.builder.io/api/v1/image/assets%2Faf2bc788bfa84b7e872eaeeb48723cea%2F349183df0ad4426f958f47672fc66a96?format=webp&width=800',
      32: 'https://cdn.builder.io/api/v1/image/assets%2Faf2bc788bfa84b7e872eaeeb48723cea%2F32ee71cf3d3a4851a4f3d322cbc73d2c?format=webp&width=800',
      40: 'https://cdn.builder.io/api/v1/image/assets%2Faf2bc788bfa84b7e872eaeeb48723cea%2Fa5a181d5d1ce432cb3961c2534497d69?format=webp&width=800',
    },
  },
};

export const STATUS_ICON_W_LABEL_ASSETS: StatusIconwLabelAssetMap = {
  warning: WARNING_ICON_ASSETS,
};

export const getStatusIconwLabelAsset = (
  status: StatusIconwLabelStatus,
  state: StatusIconwLabelState,
  size: StatusIconwLabelSize,
  assets: StatusIconwLabelAssetMap = STATUS_ICON_W_LABEL_ASSETS
): string => {
  const variantAssets = assets[status];
  if (!variantAssets) {
    throw new Error(`StatusIconwLabel: No assets registered for status "${status}".`);
  }

  const stateAssets = variantAssets[state];
  if (!stateAssets) {
    throw new Error(`StatusIconwLabel: No assets registered for state "${state}" within status "${status}".`);
  }

  return stateAssets.sizes?.[size] ?? stateAssets.default;
};
