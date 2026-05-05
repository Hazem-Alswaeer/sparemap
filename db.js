/*
 * SpareMap — Data Layer
 * =====================
 * This file is the ONLY place to change when moving from example data to real database.
 * To connect a real API, replace the PARTS array with an async fetch call
 * and update getAll(), getById(), search() accordingly.
 *
 * FUTURE SAP B1 INTEGRATION:
 * Replace this file with:
 *   const API = 'https://your-backend.com/api/v1';
 *   export const getAll = () => fetch(`${API}/parts`).then(r => r.json());
 *   export const search = q => fetch(`${API}/parts?q=${q}`).then(r => r.json());
 */

const PARTS = [
  {
    id: 'P001', sap: 'EL-SMA-FAN-001',
    name_en: 'SMA inverter cooling fan 48V DC',
    name_ar: 'مروحة تبريد عاكس SMA 48 فولت',
    category: 'Electrical', equipment: 'SMA Inverter',
    row: 'A', shelf: 2, bin: 4,
    qty: 12, min_qty: 5, unit: 'pcs', condition: 'New',
    manufacturer: 'SMA Solar Technology',
    part_number: 'FAN-48V-STP-110',
    compatible: 'STP 110, STP 60',
    notes: 'Replace at 30,000h. Store dry.',
    last_updated: '24 Apr 2025', updated_by: 'A. Hassan'
  },
  {
    id: 'P002', sap: 'EL-DCB-032A-001',
    name_en: 'DC circuit breaker 1000V 32A',
    name_ar: 'قاطع دائرة DC 1000 فولت 32 أمبير',
    category: 'Electrical', equipment: 'BOS General',
    row: 'C', shelf: 5, bin: 1,
    qty: 28, min_qty: 10, unit: 'pcs', condition: 'Good',
    manufacturer: 'ABB', part_number: 'S804PV-S32',
    compatible: 'String combiner boxes',
    notes: 'Rated 1000V DC PV applications.',
    last_updated: '22 Apr 2025', updated_by: 'Storekeeper'
  },
  {
    id: 'P003', sap: 'EL-SPD-AC-001',
    name_en: 'AC surge protection device SPD',
    name_ar: 'جهاز حماية من الصواعق AC',
    category: 'Electrical', equipment: 'BOS General',
    row: 'C', shelf: 5, bin: 3,
    qty: 3, min_qty: 10, unit: 'pcs', condition: 'New',
    manufacturer: 'Phoenix Contact', part_number: 'VAL-MS 230/1+1',
    compatible: 'AC distribution boards',
    notes: 'Low stock — reorder urgently.',
    last_updated: '20 Apr 2025', updated_by: 'Storekeeper'
  },
  {
    id: 'P004', sap: 'EL-CG-M25-SS',
    name_en: 'Cable gland M25 stainless steel',
    name_ar: 'وصلة كابل M25 ستانلس ستيل',
    category: 'Electrical', equipment: 'BOS General',
    row: 'D', shelf: 3, bin: 6,
    qty: 85, min_qty: 20, unit: 'pcs', condition: 'Good',
    manufacturer: 'Hawke International', part_number: 'M25-SS-IP68',
    compatible: 'All cable entries',
    notes: 'IP68 rated. For outdoor use.',
    last_updated: '18 Apr 2025', updated_by: 'Storekeeper'
  },
  {
    id: 'P005', sap: 'EL-SMA-CB-001',
    name_en: 'Inverter control board SMA STP',
    name_ar: 'لوحة تحكم عاكس SMA STP',
    category: 'Electrical', equipment: 'SMA Inverter',
    row: 'A', shelf: 1, bin: 2,
    qty: 0, min_qty: 2, unit: 'pcs', condition: 'New',
    manufacturer: 'SMA Solar Technology', part_number: 'CB-STP110-REV3',
    compatible: 'STP 110-60 only',
    notes: 'OUT OF STOCK. Order immediately.',
    last_updated: '24 Apr 2025', updated_by: 'System'
  },
  {
    id: 'P006', sap: 'EL-MC4-PR-001',
    name_en: 'MC4 connector pair (male + female)',
    name_ar: 'موصل MC4 ذكر وأنثى زوج',
    category: 'Electrical', equipment: 'Solar PV',
    row: 'D', shelf: 2, bin: 1,
    qty: 240, min_qty: 50, unit: 'pairs', condition: 'New',
    manufacturer: 'Stäubli', part_number: 'MC4-EVO2-PAIR',
    compatible: 'All PV strings',
    notes: 'TÜV certified. IP68.',
    last_updated: '23 Apr 2025', updated_by: 'Storekeeper'
  },
  {
    id: 'P007', sap: 'EL-BESS-FUS-63A',
    name_en: 'BESS fuse 63A 1000V DC',
    name_ar: 'فيوز بطارية 63 أمبير 1000 فولت DC',
    category: 'BESS', equipment: 'BESS CATL',
    row: 'H', shelf: 4, bin: 2,
    qty: 5, min_qty: 15, unit: 'pcs', condition: 'New',
    manufacturer: 'Mersen', part_number: 'NH-63A-1000VDC',
    compatible: 'CATL EnerOne units',
    notes: 'Critical — reorder now.',
    last_updated: '21 Apr 2025', updated_by: 'Storekeeper'
  },
  {
    id: 'P008', sap: 'ME-GRS-EP2-5KG',
    name_en: 'Bearing grease EP2 5kg',
    name_ar: 'شحم تشحيم EP2 خمسة كيلو',
    category: 'Mechanical', equipment: 'Wind Turbine',
    row: 'F', shelf: 1, bin: 3,
    qty: 2, min_qty: 8, unit: 'cans', condition: 'Good',
    manufacturer: 'Shell', part_number: 'GADUS-S3-V220C-EP2',
    compatible: 'Vestas V100, V110 bearings',
    notes: 'Low stock. Apply every 500h.',
    last_updated: '19 Apr 2025', updated_by: 'M. Ali'
  },
  {
    id: 'P009', sap: 'ME-OIL-GB-20L',
    name_en: 'Turbine gearbox oil 20L',
    name_ar: 'زيت علبة تروس التوربين 20 لتر',
    category: 'Mechanical', equipment: 'Wind Turbine',
    row: 'G', shelf: 2, bin: 1,
    qty: 1, min_qty: 4, unit: 'drums', condition: 'Good',
    manufacturer: 'Mobilgear', part_number: 'SHC-XMP-320-20L',
    compatible: 'Vestas gearbox all variants',
    notes: 'Change every 2 years or 12,000h.',
    last_updated: '15 Apr 2025', updated_by: 'M. Ali'
  },
  {
    id: 'P010', sap: 'EL-LUG-150CU',
    name_en: 'Cable lug 150mm² copper',
    name_ar: 'كبسة كابل نحاس 150 ملم مربع',
    category: 'Electrical', equipment: 'BOS General',
    row: 'D', shelf: 4, bin: 2,
    qty: 8, min_qty: 20, unit: 'pcs', condition: 'New',
    manufacturer: 'Klauke', part_number: 'KE150R',
    compatible: 'HV DC cables',
    notes: 'Crimp with Klauke tool only.',
    last_updated: '17 Apr 2025', updated_by: 'Storekeeper'
  },
  {
    id: 'P011', sap: 'ME-ORK-HYD-001',
    name_en: 'O-ring seal kit hydraulic',
    name_ar: 'طقم حلقات مطاطية هيدروليكية',
    category: 'Mechanical', equipment: 'Wind Turbine',
    row: 'F', shelf: 3, bin: 2,
    qty: 14, min_qty: 5, unit: 'sets', condition: 'Good',
    manufacturer: 'Parker Hannifin', part_number: 'ORK-HYD-V100',
    compatible: 'Vestas hydraulic pitch system',
    notes: 'Each set covers one pitch cylinder.',
    last_updated: '16 Apr 2025', updated_by: 'K. Omar'
  },
  {
    id: 'P012', sap: 'EL-CBF-15A-001',
    name_en: 'Combiner box fuse 15A 1000V',
    name_ar: 'فيوز صندوق الجمع 15 أمبير 1000 فولت',
    category: 'Electrical', equipment: 'Solar PV',
    row: 'B', shelf: 4, bin: 1,
    qty: 60, min_qty: 20, unit: 'pcs', condition: 'New',
    manufacturer: 'Littelfuse', part_number: 'SPFJ015',
    compatible: 'All string combiner boxes',
    notes: 'One per PV string.',
    last_updated: '18 Apr 2025', updated_by: 'Storekeeper'
  },
  {
    id: 'P013', sap: 'ME-PBS-VES-001',
    name_en: 'Wind turbine pitch bearing seal',
    name_ar: 'ختم محمل pitch لتوربين الرياح',
    category: 'Mechanical', equipment: 'Wind Turbine',
    row: 'F', shelf: 2, bin: 1,
    qty: 0, min_qty: 2, unit: 'pcs', condition: 'New',
    manufacturer: 'SKF', part_number: 'PBS-V100-2020',
    compatible: 'Vestas V100 pitch bearing',
    notes: 'OUT OF STOCK. Lead time 6 weeks.',
    last_updated: '22 Apr 2025', updated_by: 'System'
  },
  {
    id: 'P014', sap: 'EL-BESS-BMS-001',
    name_en: 'BESS BMS communication card',
    name_ar: 'كرت اتصال BMS لوحدة البطارية',
    category: 'BESS', equipment: 'BESS CATL',
    row: 'H', shelf: 3, bin: 4,
    qty: 0, min_qty: 1, unit: 'pcs', condition: 'New',
    manufacturer: 'CATL', part_number: 'BMS-COMM-V2-EN1',
    compatible: 'CATL EnerOne all variants',
    notes: 'OUT OF STOCK. Critical component.',
    last_updated: '20 Apr 2025', updated_by: 'System'
  },
  {
    id: 'P015', sap: 'SF-GLV-33KV-CL3',
    name_en: 'Safety gloves 33kV class 3',
    name_ar: 'قفازات عزل 33 كيلوفولت فئة 3',
    category: 'Safety', equipment: 'Safety PPE',
    row: 'J', shelf: 1, bin: 2,
    qty: 0, min_qty: 4, unit: 'pairs', condition: 'Good',
    manufacturer: 'Salisbury', part_number: 'E011B-09',
    compatible: 'HV work up to 33kV',
    notes: 'OUT OF STOCK. Safety critical — reorder immediately.',
    last_updated: '18 Apr 2025', updated_by: 'System'
  },
  {
    id: 'P016', sap: 'ME-TRK-MOT-24V',
    name_en: 'Tracker motor 24V DC Nextracker',
    name_ar: 'محرك نظام التتبع 24 فولت',
    category: 'Mechanical', equipment: 'Tracker System',
    row: 'C', shelf: 2, bin: 3,
    qty: 7, min_qty: 3, unit: 'pcs', condition: 'New',
    manufacturer: 'Nextracker', part_number: 'NX-MOT-24V-2023',
    compatible: 'NX Horizon single-axis',
    notes: 'Programmed to site config before install.',
    last_updated: '14 Apr 2025', updated_by: 'Storekeeper'
  },
  {
    id: 'P017', sap: 'CO-SIL-310-UV',
    name_en: 'Silicone sealant 310ml UV resistant',
    name_ar: 'مانع تسرب سيليكون مقاوم للأشعة فوق البنفسجية',
    category: 'Consumable', equipment: 'General',
    row: 'E', shelf: 1, bin: 4,
    qty: 45, min_qty: 10, unit: 'tubes', condition: 'Good',
    manufacturer: 'Soudal', part_number: 'SOUD-SIL-310-UV',
    compatible: 'Outdoor sealing all equipment',
    notes: 'Shelf life 18 months. Check expiry.',
    last_updated: '12 Apr 2025', updated_by: 'Storekeeper'
  },
  {
    id: 'P018', sap: 'CO-CT-300-UV',
    name_en: 'Cable tie 300mm UV resistant',
    name_ar: 'ربطة كابل 300 ملم مقاومة للأشعة فوق البنفسجية',
    category: 'Consumable', equipment: 'General',
    row: 'E', shelf: 2, bin: 1,
    qty: 1800, min_qty: 200, unit: 'pcs', condition: 'Good',
    manufacturer: 'HellermannTyton', part_number: 'T80R-PA66-BK-C1',
    compatible: 'All cable management',
    notes: 'Black UV-stabilised nylon.',
    last_updated: '10 Apr 2025', updated_by: 'Storekeeper'
  }
];

/* ── Public API (matches what a real REST API would return) ── */
const DB = {
  getAll: () => Promise.resolve([...PARTS]),
  getById: id => Promise.resolve(PARTS.find(p => p.id === id) || null),
  search: (q, cat) => {
    const v = q.toLowerCase().trim();
    let res = PARTS;
    if (cat && cat !== 'all') {
      if (cat === 'low')  res = res.filter(p => p.qty > 0 && p.qty <= p.min_qty);
      else if (cat === 'out') res = res.filter(p => p.qty === 0);
      else res = res.filter(p => p.category.toLowerCase() === cat.toLowerCase());
    }
    if (v) res = res.filter(p =>
      p.name_en.toLowerCase().includes(v) ||
      p.name_ar.includes(q) ||
      p.sap.toLowerCase().includes(v) ||
      p.equipment.toLowerCase().includes(v) ||
      p.category.toLowerCase().includes(v) ||
      `${p.row}${p.shelf}${p.bin}`.includes(v.replace(/[·\-\s]/g,''))
    );
    return Promise.resolve(res);
  },
  getAlerts: () => Promise.resolve({
    out: PARTS.filter(p => p.qty === 0),
    low: PARTS.filter(p => p.qty > 0 && p.qty <= p.min_qty)
  }),
  getStats: () => {
    const cats = {};
    PARTS.forEach(p => cats[p.category] = (cats[p.category]||0)+1);
    return Promise.resolve({
      total: PARTS.length,
      out: PARTS.filter(p => p.qty === 0).length,
      low: PARTS.filter(p => p.qty > 0 && p.qty <= p.min_qty).length,
      categories: cats
    });
  }
};
