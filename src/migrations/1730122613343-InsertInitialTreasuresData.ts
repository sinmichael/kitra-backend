import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInitialTreasuresData1730122613343
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO treasures (id, latitude, longitude, name) VALUES
            (100, 14.54376481, 121.0199117, 'T1'),
            (101, 14.55320766, 121.0557745, 'T2'),
            (102, 14.54464357, 121.0203656, 'T3'),
            (103, 14.58726159, 120.9795048, 'T4'),
            (104, 14.57320327, 121.0230904, 'T5'),
            (105, 14.52311313, 121.0194573, 'T6'),
            (106, 14.60242292, 121.0115134, 'T7'),
            (107, 14.60857463, 121.0185514, 'T8'),
            (108, 14.49111434, 121.0437482, 'T9'),
            (109, 14.54455953, 121.1060883, 'T10'),
            (110, 14.58798141, 121.058208, 'T11'),
            (111, 14.54886493, 121.0336393, 'T12'),
            (112, 14.53715059, 120.9904302, 'T13'),
            (113, 14.52579666, 121.0208688, 'T14'),
            (114, 14.51709988, 120.9810021, 'T15'),
            (115, 14.50200687, 120.9916181, 'T16'),
            (116, 14.52112441, 121.0427714, 'T17'),
            (117, 14.47720766, 120.9867927, 'T18');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DELETE FROM treasures WHERE id BETWEEN 100 AND 117;
        `);
  }
}
