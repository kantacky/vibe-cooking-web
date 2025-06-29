// カテゴリのサンプルデータ
export const sampleCategories = [
  { id: 'category-001', name: 'ご飯' },
  { id: 'category-002', name: 'おかず' },
  { id: 'category-003', name: 'デザート' },
  { id: 'category-004', name: '汁物' },
  { id: 'category-005', name: '麺' },
];

// レシピのサンプルデータ
export const sampleRecipes = [
  {
    id: 'recipe-001',
    title: 'クリーミーチキンカレー',
    description:
      'スパイスの効いた本格的なチキンカレーです。ココナッツミルクでまろやかな仕上がりに。',
    category: { id: 'category-002', name: 'おかず' },
    prepTime: 20,
    cookTime: 40,
    servings: 4,
    imageUrl:
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500',
    tags: ['カレー', 'チキン', 'スパイス', 'メイン'],
    ingredients: [
      {
        name: '鶏もも肉',
        amount: 600,
        unit: 'g',
        notes: '一口大に切る',
      },
      {
        name: '玉ねぎ',
        amount: 2,
        unit: '個',
        notes: '薄切りにする',
      },
      {
        name: 'にんにく',
        amount: 3,
        unit: '片',
        notes: 'みじん切り',
      },
      {
        name: 'カレー粉',
        amount: 3,
        unit: '大さじ',
        notes: '',
      },
      {
        name: 'ココナッツミルク',
        amount: 400,
        unit: 'ml',
        notes: '',
      },
      {
        name: 'トマト缶',
        amount: 1,
        unit: '缶',
        notes: 'カットタイプ',
      },
    ],
    instructions: [
      {
        step: 1,
        title: '鶏肉の下準備',
        description: '鶏肉を一口大に切り、塩胡椒で下味をつけます。',
        estimatedTime: 5,
      },
      {
        step: 2,
        title: '野菜を切る',
        description: '玉ねぎを薄切り、にんにくをみじん切りにします。',
        estimatedTime: 5,
      },
      {
        step: 3,
        title: '鶏肉を炒める',
        description: 'フライパンに油を熱し、鶏肉を焼き色がつくまで炒めます。',
        estimatedTime: 8,
      },
      {
        step: 4,
        title: '野菜を炒める',
        description: '玉ねぎとにんにくを加えて、しんなりするまで炒めます。',
        estimatedTime: 10,
      },
      {
        step: 5,
        title: 'スパイスを加える',
        description: 'カレー粉を加えて香りが立つまで炒めます。',
        estimatedTime: 2,
      },
      {
        step: 6,
        title: 'カレーを煮込む',
        description: 'トマト缶とココナッツミルクを加えて、20分煮込みます。',
        estimatedTime: 20,
      },
    ],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: 'recipe-002',
    title: '和風パスタ きのこと海苔',
    description:
      'しめじとしいたけの旨味が効いた和風パスタ。海苔の風味がアクセントです。',
    category: { id: 'category-001', name: 'ご飯' },
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    imageUrl: 'https://images.unsplash.com/photo-1551892374-ecf8846df748?w=500',
    tags: ['パスタ', '和風', 'きのこ', 'ランチ'],
    ingredients: [
      {
        name: 'スパゲティ',
        amount: 200,
        unit: 'g',
        notes: '',
      },
      {
        name: 'しめじ',
        amount: 100,
        unit: 'g',
        notes: '石づきを取る',
      },
      {
        name: 'しいたけ',
        amount: 4,
        unit: '枚',
        notes: '薄切り',
      },
      {
        name: '醤油',
        amount: 2,
        unit: '大さじ',
        notes: '',
      },
      {
        name: '海苔',
        amount: 1,
        unit: '枚',
        notes: '手でちぎる',
      },
      {
        name: 'バター',
        amount: 20,
        unit: 'g',
        notes: '',
      },
    ],
    instructions: [
      {
        step: 1,
        title: 'パスタを茹でる',
        description: 'パスタを表示時間通りに茹でます。',
        estimatedTime: 8,
      },
      {
        step: 2,
        title: 'きのこを炒める',
        description: 'きのこ類をフライパンで炒めます。',
        estimatedTime: 5,
      },
      {
        step: 3,
        title: 'パスタを合わせる',
        description: '茹で上がったパスタと茹で汁を少し加えます。',
        estimatedTime: 1,
      },
      {
        step: 4,
        title: '味付けして完成',
        description: '醤油とバターで味を調え、海苔をトッピングして完成です。',
        estimatedTime: 2,
      },
    ],
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
  },
  {
    id: 'recipe-003',
    title: 'チョコレートブラウニー',
    description:
      '濃厚なチョコレートの味わいが楽しめる手作りブラウニー。混ぜるだけで簡単！',
    category: { id: 'category-003', name: 'デザート' },
    prepTime: 15,
    cookTime: 30,
    servings: 6,
    imageUrl:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500',
    tags: ['スイーツ', 'チョコレート', '簡単', 'おやつ'],
    ingredients: [
      {
        name: '板チョコレート',
        amount: 200,
        unit: 'g',
        notes: 'ビター推奨',
      },
      {
        name: 'バター',
        amount: 100,
        unit: 'g',
        notes: '',
      },
      {
        name: '卵',
        amount: 2,
        unit: '個',
        notes: '',
      },
      {
        name: '砂糖',
        amount: 80,
        unit: 'g',
        notes: '',
      },
      {
        name: '薄力粉',
        amount: 60,
        unit: 'g',
        notes: 'ふるっておく',
      },
      {
        name: 'クルミ',
        amount: 50,
        unit: 'g',
        notes: '粗く刻む（お好みで）',
      },
    ],
    instructions: [
      {
        step: 1,
        title: 'オーブン予熱',
        description: 'オーブンを180℃に予熱します。',
        estimatedTime: 5,
      },
      {
        step: 2,
        title: 'チョコレートを溶かす',
        description: 'チョコレートとバターを湯煎で溶かします。',
        estimatedTime: 5,
      },
      {
        step: 3,
        title: '卵液を作る',
        description: '卵と砂糖を泡立て器でよく混ぜます。',
        estimatedTime: 3,
      },
      {
        step: 4,
        title: '生地を混ぜる',
        description: '溶かしたチョコレートと薄力粉を順に加えて混ぜます。',
        estimatedTime: 3,
      },
      {
        step: 5,
        title: '型に流し入れる',
        description: 'クルミを加えて軽く混ぜ、型に流し込みます。',
        estimatedTime: 2,
      },
      {
        step: 6,
        title: 'オーブンで焼く',
        description: '180℃のオーブンで25-30分焼きます。',
        estimatedTime: 30,
      },
    ],
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-08'),
  },
];
