import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInitialMoneyValuesData1730123786092
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO money_values (treasure_id, amount) VALUES
            (100, 15),
            (101, 10),
            (102, 15),
            (103, 15),
            (104, 10),
            (105, 15),
            (106, 15),
            (107, 10),
            (108, 15),
            (109, 15),
            (110, 10),
            (111, 15),
            (112, 15),
            (113, 10),
            (114, 15),
            (115, 15),
            (116, 10),
            (117, 15),
            (100, 20),
            (101, 25),
            (102, 20),
            (103, 25),
            (107, 30),
            (108, 30),
            (109, 30);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DELETE FROM money_values WHERE (treasure_id, amount) IN (
                (100, 15),
                (101, 10),
                (102, 15),
                (103, 15),
                (104, 10),
                (105, 15),
                (106, 15),
                (107, 10),
                (108, 15),
                (109, 15),
                (110, 10),
                (111, 15),
                (112, 15),
                (113, 10),
                (114, 15),
                (115, 15),
                (116, 10),
                (117, 15),
                (100, 20),
                (101, 25),
                (102, 20),
                (103, 25),
                (107, 30),
                (108, 30),
                (109, 30)
            );
        `);
  }
}
